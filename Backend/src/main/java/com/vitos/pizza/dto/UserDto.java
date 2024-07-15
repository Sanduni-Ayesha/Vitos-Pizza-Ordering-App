package com.vitos.pizza.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private int userId;
    private String userName;
    private String userAddress;
    private String userContactNumber;
}
