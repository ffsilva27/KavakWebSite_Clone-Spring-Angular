create table tb_anuncio(
    id Integer primary key AUTO_INCREMENT,
    fabricante varchar not null,
    modelo varchar not null ,
    anomodelo varchar not null ,
    valor double not null ,
    km varchar not null ,
    foto varchar
);

create table usuario(
                           id Integer primary key AUTO_INCREMENT,
                           nome varchar not null,
                           email varchar not null ,
                           senha varchar not null ,
                           role varchar not null
);

insert into tb_anuncio (fabricante, modelo, anomodelo, valor, km, foto) values
                                                                    ('Honda', 'Civic', '2022',115000,'0' ,'../../assets/img/Civic.jpg'),
                                                                    ('Peugeot', '208', '2018',50000, '75000','../../assets/img/208.jpg'),
                                                                    ('Ford', 'Focus', '2012',30000, '35000','../../assets/img/Focus.jpg');                                                                    ;