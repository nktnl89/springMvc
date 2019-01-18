package com.epam.mvc.springMvc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy
public class SpringMvcApplication {
    public static void main(String[] args) {
        SpringApplication.run(SpringMvcApplication.class, args);

    }
}

