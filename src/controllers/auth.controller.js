const firebase = require('firebase/app');

require('firebase/auth');
// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAfWESN4MlsP76en4HlR144xBvrq1p760o",
    authDomain: "hackaton-julio-2023.firebaseapp.com",
    projectId: "hackaton-julio-2023",
    storageBucket: "hackaton-julio-2023.appspot.com",
    messagingSenderId: "706333694030",
    appId: "1:706333694030:web:40fc2d984a8653fc090b1f"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

const authController = {

    saveUser: function (req, res) {

        const admin = require('firebase-admin');
        // Crear un nuevo usuario
        const userProperties = {
            email: req.body.email,
            password: req.body.password,
        };

        admin.auth().createUser(userProperties)
            .then((userRecord) => {
                console.log('Usuario creado exitosamente:', userRecord.uid);
                res.json(userRecord);
            })
            .catch((error) => {
                console.error('Error al crear usuario:', error);
                res.status(500).json({ error: 'Error al guardar el usuario' });
            });
    },

    login: function (req, res) {
        // Iniciar sesión con un usuario existente
        // Login de usuario
        const firebaseConfig = {
            apiKey: "AIzaSyAfWESN4MlsP76en4HlR144xBvrq1p760o",
            authDomain: "hackaton-julio-2023.firebaseapp.com",
            projectId: "hackaton-julio-2023",
            storageBucket: "hackaton-julio-2023.appspot.com",
            messagingSenderId: "706333694030",
            appId: "1:706333694030:web:40fc2d984a8653fc090b1f"
        };
        // Inicializar Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
            .then((userCredential) => {
                // El inicio de sesión fue exitoso
                const user = userCredential.user;
                console.log('Usuario autenticado:', user.uid);
                res.json(user);
            })
            .catch((error) => {
                // Ocurrió un error durante el inicio de sesión
                console.error('Error al autenticar:', error);
                res.status(500).json({ error: 'Error al guardar el usuario' });
            });
    }
};

module.exports = authController;
