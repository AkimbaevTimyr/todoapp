-- FOREIGN KEY(user_id) REFERENCES person (id) ссылка с user_id идет на id , это внешний ключ

-- создаем таблицу указываем параметры к id  параметры к email параметры к паролю primary key - первичный ключ
create TABLE person(   
    id SERIAL PRIMARY KEY, 
    email VARCHAR(255), 
    password VARCHAR(10) 
);
create TABLE todo(
    todoid SERIAL PRIMARY KEY,
    text VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
);