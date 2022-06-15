package com.lojacarro.backend.service;

import com.lojacarro.backend.dto.UsuarioSalvoDTO;
import com.lojacarro.backend.exception.SenhaInvalidaException;
import com.lojacarro.backend.model.Usuario;
import com.lojacarro.backend.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService implements UserDetailsService {

    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    @Lazy(value = true)
    private PasswordEncoder encoder;

    public UsuarioSalvoDTO salvar(Usuario usuario){
        usuarioRepository.save(usuario);
        return UsuarioSalvoDTO.builder()
                .email(usuario.getEmail())
                .msg("Usuário cadastrado")
                .build();
    }

    public UserDetails autenticar(Usuario usuario){
        UserDetails userDetails = loadUserByUsername(usuario.getEmail());
        boolean senhasBatem = encoder.matches(usuario.getSenha(), userDetails.getPassword());
        if(senhasBatem){
            return userDetails;
        }
        throw new SenhaInvalidaException("Senha inválida.");
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByEmail(username)
                .orElseThrow(() ->new UsernameNotFoundException("Usuario não encontrado."));
        return User.builder()
                .username(usuario.getEmail())
                .password(usuario.getSenha())
                .roles(usuario.getRole())
                .build();
    }
}
