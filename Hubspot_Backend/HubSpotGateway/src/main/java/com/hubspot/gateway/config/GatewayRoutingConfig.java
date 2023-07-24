package com.hubspot.gateway.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

@Configuration
public class GatewayRoutingConfig {
	@Bean
	public RouteLocator configureRoute(RouteLocatorBuilder builder)
	{
		
		
		// port for the gateway is 8089
		
//		Static Route
//		return builder.routes()
//				.route("UserId", r -> r.path("/api/v2/**").uri("http://localhost:8081"))
//				.route("NoteId", r -> r.path("/api/v1/**").uri("http://localhost:8080"))
//				.build();	
//		Dynamic Route
		return builder.routes()
				.route("Login", r -> r.path("/auth/user/**").uri("http://localhost:8081"))
				.route("Regsiter", r -> r.path("/api/**").uri("http://localhost:8082"))
				.route("RoomDetails", r -> r.path("/room/**").uri("http://localhost:8084"))
				.route("BookingJpaMs", r -> r.path("/book/**").uri("http://localhost:8083"))
				.route("adminService", r -> r.path("/api/admin**").uri("http://localhost:8085"))
				.build();
	}
	
	 @Bean
	    public CorsWebFilter corsWebFilter() {
	        CorsConfiguration corsConfiguration = new CorsConfiguration();
	        corsConfiguration.addAllowedOrigin("*");
	        corsConfiguration.addAllowedMethod("*");
	        corsConfiguration.addAllowedHeader("*");
	        corsConfiguration.setAllowCredentials(true);

	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	        source.registerCorsConfiguration("/**", corsConfiguration);

	        return new CorsWebFilter(source);
	    }
	
//	@Bean
//    public CorsWebFilter corsFilter() {
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        CorsConfiguration config = new CorsConfiguration();
//
//        // Set allowed origins - Replace "http://localhost:4200" with your Angular app's domain/port
//        config.addAllowedOrigin("http://localhost:4200");
//
//        // Set allowed HTTP methods
//        config.addAllowedMethod("GET");
//        config.addAllowedMethod("POST");
//        config.addAllowedMethod("PUT");
//        config.addAllowedMethod("PATCH");
//        config.addAllowedMethod("DELETE");
//        config.addAllowedMethod("OPTIONS");
//
//        // Set allowed headers
//        config.addAllowedHeader("Jwt-Token");
//        config.addAllowedHeader("Authorization");
//        config.addAllowedHeader("Content-Type");
//
//        // Allow credentials (e.g., cookies) to be included in the request
//        config.setAllowCredentials(true);
//
//        source.registerCorsConfiguration("/**", config);
//
//        // Use CorsFilter constructor with UrlBasedCorsConfigurationSource
//        return new CorsWebFilter(source);
//    }
	
}