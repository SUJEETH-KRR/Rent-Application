package com.example.Car_rent.Security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

//	@Bean
//	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//		http
//		.authorizeHttpRequests(auth -> auth
//			.requestMatchers("/login")
//			.permitAll()
//			.anyRequest().authenticated()
//		)
//		.formLogin(form -> form
////			.loginPage("/api/login")
//			.defaultSuccessUrl("/api/home", true)
//			.failureUrl("/login?error=true")
//			.permitAll()
//		)
//		.logout(logout -> logout
//			.logoutUrl("/logout")
//			.logoutSuccessUrl("/login?logout=true")
//			.permitAll()
//		)
//		.csrf(csrf -> csrf
//			.disable()
//		);
//																														
//		return http.build();
	
	@Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())  // ✅ Disable CSRF for API
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/**").permitAll()  // ✅ Allow all API endpoints
                .anyRequest().authenticated()
            );

        return http.build();
	}

}
