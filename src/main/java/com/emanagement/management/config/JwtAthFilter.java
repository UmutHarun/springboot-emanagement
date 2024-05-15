package com.emanagement.management.config;

import java.io.IOException;

import org.apache.tomcat.util.http.parser.Authorization;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtAthFilter extends OncePerRequestFilter {

    UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
    throws ServletException, IOException {
        // final String authHeader = request.getHeader("AUTHORIZATION");
        // final String userEmail;
        // final String jwtToken;

        // if(authHeader == null || !authHeader.startsWith("Bearer")){
        //     filterChain.doFilter(request, response);
        //     return;
        // }

        // jwtToken = authHeader.substring(7);
        // userEmail = "something";

        // if(userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null){
        //     UserDetails userDetails = userDetailsService.loadUserByUsername(userEmail);

        //     if(jwtTokenIsValid(jwtToken, userDetails)){
        //         UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userDetails,null, userDetails.getAuthorities());
        //     }
        // }
    }
}
