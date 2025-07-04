package com.rest.login.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rest.login.fiegnClient.ConsumerRestRegister;
import com.rest.login.model.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.ServletException;

@RestController
@RequestMapping("/auth/user")
@CrossOrigin("*")
public class loginController {
	private Map<String,String> map = new HashMap<>();


	@Autowired
	private ConsumerRestRegister userService;
	

	@GetMapping("/")
	public String serverStarted() {
		return "Authentication Server Started";
	}
	
	private static final String SECRET_KEY = "secret key";

    @PostMapping("/isAuthenticated")

    public ResponseEntity<?> authorizeRequest(@RequestHeader("Authorization") String token) {

        try {
              String jwtToken = token.substring(7);
              
            Claims claims = Jwts.parser().setSigningKey("secret key").parseClaimsJws(jwtToken).getBody();

            System.out.println("code");

            String username = claims.getSubject();

            String role = (String) claims.get("role");

            return new ResponseEntity<>(true, HttpStatus.OK);

        } catch (Exception e) {

            e.printStackTrace();

            return new ResponseEntity<>(false,HttpStatus.UNAUTHORIZED);

        }

    }
	
	@PostMapping("/authUser")
	public ResponseEntity<?> doLogin(@RequestBody User user){
		try {
			String jwtToken = generateToken(user);
		
			map.put("message", "User Successfully LoggedIn");
			
			map.put("token", jwtToken);
		
		} catch (Exception e) {
			map.put("message", e.getMessage());
			map.put("token", null);
			return new ResponseEntity<>(map,HttpStatus.UNAUTHORIZED);
		}
		
		return new ResponseEntity<>(map,HttpStatus.OK);
	}

	private String generateToken(User user) throws ServletException 
	{
		String jwtToken = "";
		if(user.getEmail() == null || user.getPassword() == null) {
			throw new ServletException("Please send valid username and password");
		}
	
		boolean flag = 	userService.validateUserHandler(user);
		if(!flag)
			throw new ServletException("Invalid Credentials");
		else {
			jwtToken = Jwts.builder()
					        .setSubject(user.getEmail())
					        .setIssuedAt(new Date())
					        .setExpiration(new Date(System.currentTimeMillis() + 3000000))
					        .signWith(SignatureAlgorithm.HS256, "secret key")
					        .compact();
		}
		return jwtToken;
	}
	
}
