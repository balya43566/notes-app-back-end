const getAllNotesHandler = () => ({
    status: 'success',
    data: {
      notes,
    },
  });
   
  module.exports = { addNoteHandler, getAllNotesHandler };