package com.lojacarro.backend.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "usuario")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "nome")
    @NotEmpty(message = "Campo nome é de preenchimento obrigatório.")
    private String nome;
    @Column(name = "email")
    @NotEmpty(message = "Campo email é de preenchimento obrigatório.")
    private String email;
    @Column(name = "senha")
    @NotEmpty(message = "Campo senha é de preenchimento obrigatório.")
    private String senha;
    @Column(name = "role")
    private String role;
}
