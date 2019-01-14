package com.epam.mvc.springMvc.controller;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@PropertySource(value = {"classpath:application.properties"})
public class WebConfig implements WebMvcConfigurer {

}
