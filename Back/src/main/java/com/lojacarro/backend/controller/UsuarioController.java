package com.lojacarro.backend.controller;

import com.lojacarro.backend.dto.CredenciaisDTO;
import com.lojacarro.backend.dto.TokenDTO;
import com.lojacarro.backend.dto.UsuarioSalvoDTO;
import com.lojacarro.backend.jwtSecurity.JwtService;
import com.lojacarro.backend.model.Usuario;
import com.lojacarro.backend.repository.UsuarioRepository;
import com.lojacarro.backend.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
    @Autowired
    private PasswordEncoder encoder;
    @Autowired
    UsuarioService usuarioService;
    @Autowired
    UsuarioRepository usuarioRepository;
    @Autowired
    JwtService jwtService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UsuarioSalvoDTO salvar(@RequestBody Usuario usuario){
        usuario.setSenha(encoder.encode(usuario.getSenha()));
        usuario.setRole("ADMIN");
        return usuarioService.salvar(usuario);
    }

    @PostMapping("/auth")
    public TokenDTO autenticar(@RequestBody CredenciaisDTO credenciaisDTO){
        Usuario usuario = Usuario.builder()
                .email(credenciaisDTO.getEmail())
                .senha(credenciaisDTO.getSenha())
                .build();
        UserDetails userDetails = usuarioService.autenticar(usuario);
        String token = jwtService.gerarToken(userDetails);
        return TokenDTO.builder()
                .email(userDetails.getUsername())
                .token(token)
                .build();
    }

    @GetMapping("/list")
    public List<Usuario> getAll(){
        return usuarioRepository.findAll();
    }
}
