package com.lojacarro.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class AnuncioDTO {

    @NotEmpty(message = "Campo fabricante é de preenchimento obrigatório.")
    private String fabricante;
    @NotEmpty(message = "Campo modelo é de preenchimento obrigatório.")
    private String modelo;
    @NotEmpty(message = "Campo ano do modelo é de preenchimento obrigatório.")
    private String anomodelo;
    @NotNull(message = "Campo valor é de preenchimento obrigatório.")
    private Double valor;
    @NotEmpty(message = "Campo km é de preenchimento obrigatório.")
    private String km;
    @NotEmpty(message = "Campo foto é de preenchimento obrigatório.")
    private String foto;

}
