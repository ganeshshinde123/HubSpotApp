package com.hubspot.gateway;
import java.util.Arrays;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


//import com.hubspot.gateway.JWTFilter.jwtFilterGateway;
//
//import jakarta.servlet.Filter;

@SpringBootApplication
@ComponentScan("com.hubspot.gateway.config") 
public class HubSpotGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(HubSpotGatewayApplication.class, args);
	}
	
//	@Bean
//	public FilterRegistrationBean jwtFilter() 
//	{
//		FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
//		filterRegistrationBean.setFilter(new jwtFilterGateway());
//		filterRegistrationBean.addUrlPatterns("h/**");
//		return filterRegistrationBean;
//	}
	

	
}
