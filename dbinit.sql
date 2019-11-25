CREATE TABLE userTable (
    id serial PRIMARY KEY,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(1000) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    jobRole VARCHAR(30) NOT NULL,
    address VARCHAR(100),
    staffnumber VARCHAR(20) NOT NULL,
    employmentdate DATE,
    administrator BOOLEAN NOT NULL DEFAULT FALSE
);
CREATE TABLE tagTable (
    id serial PRIMARY KEY,
    tagname VARCHAR(30) NOT NULL
);
CREATE TABLE commentTable (
    id serial PRIMARY KEY,
    coment text NOT NULL,
    feedid INT NOT NULL,
    createdOn TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    inappropFlag BOOLEAN DEFAULT FALSE NOT NULL,
    authorid INT NOT NULL
);
CREATE TABLE feedTable (
    id serial PRIMARY KEY,
    title text,
    feed text NOT NULL,
    feedtype VARCHAR(10) NOT NULL,
    createdon TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    authorid INT NOT NULL,
    tagid INT,
    inappropFlag BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO
    usertable (
        firstname,
        lastname,
        email,
        gender,
        staffnumber,
        address,
        employmentdate,
        jobrole,
        administrator,
        password
    )
VALUES
    (
        'super',
        'user',
        'superuser@teamwork.com',
        'male',
        'TW00001',
        'TeamWork Office',
        CURRENT_TIMESTAMP,
        'super admin',
        true,
        '$2b$10$QfiRlhNKVqosriah12DDveCQ6tCgZTKlMMwcHF9dNZP1lGFtuAYmu'
    );

    
    INSERT INTO tagtable (tagname) VALUES('Work');
    -- INSERT INTO feedtable (title, feed, createdon, authorid, tagid, inappropflag, feedtype) VALUES('a new title', 'the article is a good piece of my mind', CURRENT_TIMESTAMP, 1, 1, FALSE, 'art');
    -- INSERT INTO feedtable (title, feed, createdon, authorid, tagid, inappropflag, feedtype) VALUES('so glad', 'www.cloudinary.com/thepictureishere.jpg', CURRENT_TIMESTAMP, 1, 1, FALSE, 'gif');
    -- INSERT INTO commenttable (coment, feedid, createdon, inappropflag, authorid) VALUES('the article is truly as you said', 1, CURRENT_TIMESTAMP, FALSE, 1);