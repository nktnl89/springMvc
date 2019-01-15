package com.epam.mvc.springMvc.configuration;

import com.epam.mvc.springMvc.interceptor.AuthInterceptor;
import com.epam.mvc.springMvc.interceptor.UserNameAwareInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@PropertySource(value = {"classpath:application.properties"})
public class WebConfig implements WebMvcConfigurer {
    @Bean
    public AuthInterceptor authInterceptor() {
        return new AuthInterceptor();
    }

    @Bean
    public UserNameAwareInterceptor userNameAwareInterceptor() {
        return new UserNameAwareInterceptor();
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(authInterceptor()).addPathPatterns("/**")
                .excludePathPatterns("/login", "/registration",
                        "/logout", "/css/**", "/js/**", "/check**");

        registry.addInterceptor(userNameAwareInterceptor()).addPathPatterns("/**")
                .excludePathPatterns("/login",
                        "/registration", "/logout", "/css/**", "/js/**");
    }
}
