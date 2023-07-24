package com.reg.api;

import java.util.Arrays;

import org.apache.catalina.filters.CorsFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

import com.reg.api.JWTFilter.jwtFilterAuthLogin;

@SpringBootApplication
@EnableDiscoveryClient
public class RegistrationHackathonApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(RegistrationHackathonApiApplication.class, args);
	}
	

}
