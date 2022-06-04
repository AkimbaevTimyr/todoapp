
-- создаем таблицу указываем параметры к id  параметры к email параметры к паролю primary key - первичный ключ
-- FOREIGN KEY(user_id) REFERENCES person (id) ссылка с user_id идет на id , это внешний ключ
create TABLE person(   
    id BIGINT PRIMARY KEY,  
    email VARCHAR(255), 
    password VARCHAR(10) 
);


create TABLE todo(
    todoid BIGINT PRIMARY KEY, 
    text VARCHAR(255),
    user_id BIGINT, 
    FOREIGN KEY (user_id) REFERENCES person (id)
);