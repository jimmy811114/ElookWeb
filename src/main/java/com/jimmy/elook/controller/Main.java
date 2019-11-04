/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.jimmy.elook.controller;

import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 *
 * @author jimmy
 */
@Controller
public class Main {

    @GetMapping("/")
    public String sayHello(HttpServletRequest request) {
        request.setAttribute("key", "hello world");
        return "index";
    }
}
