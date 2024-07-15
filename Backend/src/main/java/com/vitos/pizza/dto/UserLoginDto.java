package com.vitos.pizza.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserLoginDto {
    private String userName;
    private String password;
}
