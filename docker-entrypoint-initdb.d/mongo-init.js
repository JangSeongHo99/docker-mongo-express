db.auth('root', 'witcar@700')

db = db.getSiblingDB('test')

db.createUser(
    {
        user: "test",
        pwd: "1q2w3e4r",
        roles: [
            {
                "role" : "userAdminAnyDatabase",
                "db" : "admin"
            },
            {
                "role" : "dbAdminAnyDatabase",
                "db" : "admin"
            },
            {
                "role" : "readWriteAnyDatabase",
                "db" : "admin"
            }
        ]
    }
);