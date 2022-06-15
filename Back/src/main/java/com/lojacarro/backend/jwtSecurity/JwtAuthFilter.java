package com.lojacarro.backend.jwtSecurity;

import com.lojacarro.backend.service.UsuarioService;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtAuthFilter extends OncePerRequestFilter {
    private JwtService jwtService;
    private UsuarioService usuarioService;

    public JwtAuthFilter( JwtService jwtService, UsuarioService usuarioService ) {
        this.jwtService = jwtService;
        this.usuarioService = usuarioService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        String authorization = request.getHeader("Authorization");

        if(authorization!=null && authorization.startsWith("Bearer")){
            String token = authorization.split(" ")[1];
            if(jwtService.tokenValido(token)){
                UserDetails user = usuarioService.loadUserByUsername(jwtService.obterClaims(token).getSubject());
                UsernamePasswordAuthenticationToken username = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
                username.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(username);
            }
        }
        filterChain.doFilter(request, response);
    }
}
