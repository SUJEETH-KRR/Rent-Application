package com.example.Car_rent.Security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

//@Configuration
//@EnableWebSecurity
public class SecurityConfig {

	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		return http.formLogin(form -> form.loginPage("/login").permitAll().defaultSuccessUrl("/home", true))
				.authorizeHttpRequests(auth -> auth.anyRequest().authenticated())
				.logout(logout -> logout.logoutUrl("/logout") // Custom logout URL
						.logoutSuccessUrl("/") // Redirect to the homepage after logout
						.invalidateHttpSession(true) // Invalidate the session
						.clearAuthentication(true) // Clear authentication
						.permitAll() // Allow everyone to access logout
				).build();
	}

}
