package com.lojacarro.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class AnuncioDTO {

    private String fabricante;
    private String modelo;
    private String anomodelo;
    private Double valor;
    private String km;
    private String foto;

}
