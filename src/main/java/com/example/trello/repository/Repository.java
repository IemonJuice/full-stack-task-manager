package com.example.trello.repository;

import com.example.trello.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Repository extends JpaRepository<Task,Integer> {
}
