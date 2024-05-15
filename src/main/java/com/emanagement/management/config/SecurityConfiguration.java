package com.emanagement.management.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractAuthenticationFilterConfigurer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import com.emanagement.management.Service.MyUserDetailsService;


@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    @Autowired
    private MyUserDetailsService userDetailsService;

    @Bean
    @Order(SecurityProperties.BASIC_AUTH_ORDER)
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception{
        return httpSecurity
            .csrf(AbstractHttpConfigurer::disable)
            .authorizeHttpRequests(registry -> {
            registry.requestMatchers("/register/user").permitAll();
            registry.requestMatchers("/api/employees").hasRole("USER");
            registry.requestMatchers("/api/index").hasRole("USER");
            registry.anyRequest().authenticated();
        })
        .formLogin(httpSecurityFormConfigurer -> {
            httpSecurityFormConfigurer.loginPage("/login").permitAll();
        })
        .build();
    }

    // @Bean
    // public UserDetailsService userDetailsService() {
    //     UserDetails user = User.builder()
    //         .username("user")
    //         .password("$2a$12$qsa7DLO569fusCU7KjTuC.x7nhishFFVFYuc/HtYC500C/Rl7RyQ2")
    //         .roles("USER")
    //         .build();
    //     UserDetails admin = User.builder()
    //         .username("admin")
    //         .password("2345")
    //         .roles("ADMIN","USER")
    //         .build();
    //     return new InMemoryUserDetailsManager(admin,user);
    // }

    @Bean
    public UserDetailsService userDetailsService(){
        return userDetailsService;
    }

    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }

    @Bean
    public org.springframework.security.crypto.password.PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

}
