use("citasDB");
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "ID",
        "names",
        "phone",
        "address",
        "email",
        "genre",
        "attendant",
      ],
      properties: {
        ID: {
          bsonType: "int",
          description: "ID is required",
        },

        // NAMES
        names: {
          bsonType: "object",
          required: ["name", "surname"],
          properties: {
            name: {
              bsonType: "string",
              description: "name is required",
            },
            surname: {
              bsonType: "string",
              description: "surname is required",
            },
          },
          description: "Names is required",
        },

        //PHONE NUMBER
        phone: {
          bsonType: "string",
          maxLength: 10,
          description:
            "phone number is required and has a maximum of 10 characters.",
        },
        //ADDRESS

        address: {
          bsonType: "string",
          description: "address is required",
        },

        //EMAIL
        email: {
          bsonType: "string",
          description: "email is required",
        },

        //GENRE
        genre: {
          bsonType: "object",
          required: ["nameGenre", "abbreviation"],
          properties: {
            nameGenre: {
              bsonType: "string",
              enum: ["masculino", "femenino"],
              description: "genre's name is required",
            },
            abbreviation: {
              bsonType: "string",
              enum: ["M", "F"],
              description: "genre's abbreviation is required",
            },
          },
          description: "genre is required",
        },

        //ATTENDANT
        attendant: {
          bsonType: "object",
          required: ["ID", "name", "phone", "address"],
          properties: {
            ID: {
              bsonType: "int",
              description: "attendant's ID is required",
            },
            name: {
              bsonType: "string",
              description: "attendant's name is required",
            },
            phone: {
              bsonType: "string",
              maxLength: 10,
              description: "attendant's phone is required",
            },
            address: {
              bsonType: "string",
              description: "attendant's address is required",
            },
          },
        },
      },
    },
  },
});

use("citasDB");
db.createCollection("doctors", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["ID", "name", "office", "specialty"],
      properties: {
        ID: {
          bsonType: "int",
          description: "ID is required",
        },
        name: {
          bsonType: "string",
          description: "name is required",
        },
        office: {
          bsonType: "object",
          required: ["ID", "name"],
          properties: {
            ID: {
              bsonType: "int",
              description: "office's ID is required",
            },
            name: {
              bsonType: "string",
              description: "office's name is required",
            },
          },
          description: "office is required",
        },
        specialty: {
          bsonType: "object",
          required: ["ID", "name"],
          properties: {
            ID: {
              bsonType: "int",
              description: "specialty's ID is required",
            },
            name: {
              bsonType: "string",
              description: "specialty's name is required",
            },
          },
          description: "specialty is required",
        },
      },
    },
  },
});

use("citasDB");
db.createCollection("quotes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["date", "state", "doctor", "user"],
      properties: {
        ID: {
          bsonType: "int",
        },
        date: {
          bsonType: "date",
          description: "date is required",
        },
        state: {
          bsonType: "string",
          enum: ["activo", "inactivo"],
          description: "state is required",
        },
        doctor: {
          bsonType: "object",
          required: ["ID", "name"],
          properties: {
            ID: {
              bsonType: "int",
              description: "doctor's ID is required",
            },
            name: {
              bsonType: "string",
              description: "doctor's name is required",
            },
          },
          description: "doctor is required",
        },
        user: {
          bsonType: "object",
          required: ["ID", "names"],
          properties: {
            ID: {
              bsonType: "int",
              description: "user's ID is required",
            },
            names: {
              bsonType: "object",
              required: ["name", "surname"],
              properties: {
                name: {
                  bsonType: "string",
                  description: "user's name is required",
                },
                surname: {
                  bsonType: "string",
                  description: "user's surname is required",
                },
              },
            },
          },
        },
      },
    },
  },
});

use("citasDB");
db.quotes.insertOne({
  ID: 1,
  date: new Date("2023-08-21"),
  state: "activo",
  doctor: {
    ID: 1097094415,
    name: "Jean Angarita",
  },
  user: {
    ID: 1005184201,
    names: {
      name: "Juan",
      surname: "Peréz",
    },
  },
});

use("citasDB");
db.doctors.insertOne({
  ID: 1097094415,
  name: "Jean Angarita",
  office: {
    ID: 1,
    name: "Consultorio 1",
  },

  specialty: {
    ID: 1,
    name: "Terapeuta",
  },
});

use("citasDB");
db.users.insertOne({
  ID: 1005184201,
  names: {
    name: "Juan",
    surname: "Pérez",
  },
  phone: "1234567890",
  address: "Calle 123",
  email: "juan@gmail.com",
  genre: {
    nameGenre: "masculino",
    abbreviation: "M",
  },
  attendant: {
    ID: 1234567890,
    name: "Ana",
    phone: "9876543210",
    address: "Avenida ABC",
  },
});

