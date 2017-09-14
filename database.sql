CREATE TABLE tipsntricks(
id SERIAL PRIMARY KEY,
title VARCHAR(64) NOT NULL,
info TEXT NOT NULL,
track VARCHAR(16),
page INT
)

INSERT INTO tipsntricks (title, info, track, page)
VALUES ('hello','fishing', 'plan', 1);