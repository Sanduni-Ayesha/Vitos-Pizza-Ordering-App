package com.vitos.pizza.controller;

import com.vitos.pizza.dto.UserDto;
import com.vitos.pizza.dto.UserLoginDto;
import com.vitos.pizza.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/getUser")
    public ResponseEntity<UserDto> getUserByName(@RequestBody UserLoginDto userLoginDto) {
        return new ResponseEntity<>(userService.getUserByName(userLoginDto), HttpStatus.OK);
    }

}
