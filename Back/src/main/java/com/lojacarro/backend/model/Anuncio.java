package com.lojacarro.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data @AllArgsConstructor @NoArgsConstructor @Builder
@Entity
@Table(name = "tb_anuncio")
public class Anuncio {

    @Id
    private Integer id;
    private String fabricante;
    private String modelo;
    private String anomodelo;
    private Double valor;
    private String km;
    private String foto;
}
