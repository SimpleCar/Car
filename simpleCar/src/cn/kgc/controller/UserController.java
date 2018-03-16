package cn.kgc.controller;

import cn.kgc.entity.User;
import cn.kgc.service.UserService;
import cn.kgc.utils.SendCode;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.Random;

@Controller
@RequestMapping("userController")
public class UserController {
    @Resource
    private UserService userService;

    private SendCode sendCode;

    @RequestMapping("goSignIn")
    public String goSignIn() {
        return "signIn";
    }

    @RequestMapping("signIn")
    public String signIn(Model model, HttpServletRequest request) {
        String phone = request.getParameter("mobile");
        model.addAttribute("phone", phone);
        return "indexPage";
    }

    @RequestMapping("goSignUp")
    public String goSignUp() {
        return "signUp";
    }

    @RequestMapping("signUp")
    public String signUp(User user, Model model) {
        int result = userService.insertUser(user.getUphone(), user.getUpwd());
        if (result > 0) {
            model.addAttribute("phone", user.getUphone());
            return "redirect:indexPage";
        } else {
            return "signUp";
        }
    }

    @RequestMapping("sendCode")
    public String sendCode(HttpServletRequest servletRequest, Model model){
        int max = 10000;
        int min = 1000;
        Random random = new Random();
        int code = random.nextInt(max) % (max - min + 1) + min;
        String code2 = code + "";
        String phone = servletRequest.getParameter("mobile");

        sendCode.sendSms(phone, code2);

        model.addAttribute("code",code2);
        return "signUp";
    }

}
