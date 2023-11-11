package com.example.trello.controllers;


import com.example.trello.entities.Task;
import com.example.trello.repository.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class MainController {
    private final Repository userRepository;

    public MainController(Repository userRepository) {
        this.userRepository = userRepository;
    }
    @CrossOrigin(origins = "http://localhost:4200", methods = {RequestMethod.POST, RequestMethod.PUT, RequestMethod.GET}, allowedHeaders = {"Content-Type", "Authorization"}, maxAge = 3600, allowCredentials = "true")
    @PostMapping("/tasks")
    Task newTask(@RequestBody Task newTask) {
        newTask.setId(10);
        return userRepository.save(newTask);
    }
    @CrossOrigin(origins = "http://localhost:4200", methods = {RequestMethod.POST, RequestMethod.PUT, RequestMethod.GET}, allowedHeaders = {"Content-Type", "Authorization"}, maxAge = 3600, allowCredentials = "true")
    @GetMapping("/tasks/get")
    List<Task> getAllTasks(){
        return userRepository.findAll();
    }

}
