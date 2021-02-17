import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import {
  startLoadingNotes,
  startNewNote,
  startSaveNote,
  startUploading,
} from '../../actions/notes';
import { db } from '../../firebase/firebaseConfig';
import { fileUpload } from '../../helpers/fileUpload';
import { types } from '../../types/types';

jest.mock('../../helpers/fileUpload', () => ({
  fileUpload: jest.fn(() => {
    // return Promise.resolve('https://holamundo.com/foto.png');
    return 'https://holamundo.com/foto.png';
  }),
}));

const initState = {
  auth: {
    uid: 'prueba',
  },
  notes: {
    active: {
      id: 'FqyY0disAAtVJO0aQfxz',
      title: 'Hola',
      body: 'Mundo',
    },
  },
};

// Nuestro store
let store = mockStore(initState);

describe('Pruebas con las acciones de notes', () => {
  // Limpiar las acciones o dispatch que almacena el store
  beforeEach(() => {
    store = mockStore(initState);
  });

  test('debe de crear una nueva nota startNewNote', async () => {
    await store.dispatch(startNewNote());

    const actions = store.getActions();
    // console.log(actions);

    expect(actions[0]).toEqual({
      type: types.notesActive,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        url: '',
        date: expect.any(Number),
      },
    });

    expect(actions[1]).toEqual({
      type: types.notesAddNew,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        url: '',
        date: expect.any(Number),
      },
    });

    const docId = actions[0].payload.id;
    await db.doc(`/testing/journal/notes/${docId}`).delete();
  });

  /*
  // Error por los .env de Firestore...
  test('startLoadinNotes debe cargar las Notas', async () => {
    await store.dispatch(startLoadingNotes('testing'));

    const actions = store.getActions();
    expect(action[0]).toEqual({
      type: types.notesLoaded,
      payload: expect.any(Array),
    });

    const expected = {
      id: expect.any(String),
      title: expect.any(String),
      body: expect.any(String),
      date: expect.any(Number),
    };

    expect(actions[0].payload[0]).toMatchObject(expected);
  });

  test('startSaveNote debe guardar/actualizar los cambios en la nota', async () => {
    const note = {
      id: '5qrLjRR30JanbT682uhR',
      title: 'titulo',
      body: 'body',
    };
    await store.dispatch(startSaveNote(note));

    const actions = store.getActions();

    expect(actions[0].type).toBe(types.notesUpdated);

    const docRef = await db.doc(`/testing/journal/notes/${note.id}`).get();
    expect(docRef.data().title).toBe(note.title);
  });


  test('startUploading debe actualizar el url del entry', async () => {
    const file = new File([], 'foto.png');
    await store.dispatch(startUploading(file));

    const docRef = await db.doc('/testing/journal/notes/FqyY0disAAtVJO0aQfxz').get();
    expect(docRef.data().url).toBe('https://holamundo.com/foto.png');
  });
  */
});
