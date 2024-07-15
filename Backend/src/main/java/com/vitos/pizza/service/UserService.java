package com.vitos.pizza.service;

import com.vitos.pizza.dto.UserDto;
import com.vitos.pizza.dto.UserLoginDto;
import com.vitos.pizza.model.User;
import com.vitos.pizza.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    private ModelMapper modelMapper = new ModelMapper();
    Logger logger = LoggerFactory.getLogger(UserService.class);

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDto getUserByName(UserLoginDto userLoginDto) {
        User user = userRepository.findByUserName(userLoginDto.getUserName());
        if (user == null) {
            return null;
        } else {
            if (user.getPassword().equals(userLoginDto.getPassword())) {
                return modelMapper.map(user, UserDto.class);
            }
        }
        return null;
    }
}
