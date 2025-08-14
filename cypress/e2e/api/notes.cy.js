describe('Notes API', () => {
  let authToken;

  // This beforeEach runs before ALL tests in this file
  // It only handles authentication.
  beforeEach(() => {
    const timestamp = Date.now();
    const userCredentials = {
      fullName: 'Test2 Testi',
      email: `test_${timestamp}@gmail.com`,
      password: 'StrongPass123',
    };

    cy.request({
      method: 'POST',
      url: '/auth/register',
      body: userCredentials,
    })
    .then((registerResponse) => {
      expect(registerResponse.status).to.eq(201);
      return cy.request({
        method: 'POST',
        url: '/auth/login',
        body: {
          email: userCredentials.email,
          password: userCredentials.password,
        },
      });
    })
    .then((loginResponse) => {
      expect(loginResponse.status).to.eq(200);
      authToken = loginResponse.body.data.accessToken;
    });
  });

  // This test only needs a logged-in user, not a pre-existing note.
  it('should correctly fetch all notes for a user', () => {
    cy.request({
      method: 'GET',
      url: '/notes',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.notes).to.be.an('array');
    });
  });


  // A new context for tests that REQUIRE a note to exist beforehand
  describe('when a note exists', () => {
    // This hook runs before each test INSIDE THIS 'describe' block
    beforeEach(() => {
      const newNote = {
        title: 'Note for testing',
        content: 'This note was created in beforeEach',
      };

      // Create a note and create an alias for its ID
      cy.request({
        method: 'POST',
        url: '/add-note',
        body: newNote,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }).then((noteResponse) => {
        expect(noteResponse.status).to.eq(201);
        expect(noteResponse.body.note).to.have.property('title', newNote.title);
        expect(noteResponse.body.note).to.have.property('content', newNote.content);
        expect(noteResponse.body.note).to.have.property('_id');
        cy.wrap(noteResponse.body.note._id).as('noteId');
      });
    });

    it('should fetch a specific note by its ID', () => {
      cy.get('@noteId').then((noteId) => {
        cy.request({
          method: 'GET',
          url: `/notes/${noteId}`,
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.note).to.have.property('_id', noteId);
        });
      });
    });

    it('should update the note', () => {
      const updatedData = { title: 'Updated Title!' };
      cy.get('@noteId').then((noteId) => {
        cy.request({
          method: 'PUT',
          url: `/update-note/${noteId}`,
          body: updatedData,
          headers: { Authorization: `Bearer ${authToken}` },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.note.title).to.eq(updatedData.title);
        });
      });
    });

    it('should delete the note', () => {
      cy.get('@noteId').then((noteId) => {
        cy.request({
          method: 'DELETE',
          url: `/delete-note/${noteId}`,
          headers: { Authorization: `Bearer ${authToken}` },
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
    });
  });
});
