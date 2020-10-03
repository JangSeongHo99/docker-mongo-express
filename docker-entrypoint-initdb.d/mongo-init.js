db.auth('root', 'witcar700')

db = db.getSiblingDB('test')

db.createUser(
    {
        user: "test",
        pwd: "1q2w3e4r",
        roles: [
            {
                role: 'root',
                db: 'test'
            }
 /*        {
                "role" : "userAdminAnyDatabase",
                "db" : "test"
            },
            {
                "role" : "dbAdminAnyDatabase",
                "db" : "test"
            },
            {
                "role" : "readWriteAnyDatabase",
                "db" : "test"
            }
        */        ]
    }
);