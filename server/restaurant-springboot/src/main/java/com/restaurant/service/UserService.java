package com.restaurant.service;

import com.restaurant.model.User;
import com.restaurant.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public Boolean loginUser(User user){
        Boolean retVal = false;
        int flag = userRepository.doesUserExist(user.getUsername(), user.getPassword());
        if(flag == 1){
            retVal = true;
        }

        return retVal;
    }
}
