package cn.kgc.service.impl;

import cn.kgc.dao.UserMapper;
import cn.kgc.entity.User;
import cn.kgc.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import java.util.List;

@Service
@RequestMapping("userService")
public class UserServiceImpl implements UserService {
    @Resource
    private UserMapper userMapper;

    @Override
    public List<User> selectAll() {
        return userMapper.selectAll();
    }

    @Override
    public User selectUser(String uphone, String upwd) {
        return userMapper.selectUser(uphone,upwd);
    }

    @Override
    public int insertUser(String uphone, String upwd) {
        return userMapper.insertUser(uphone,upwd);
    }

    @Override
    public User selectByPhone(String uphone) {
        return userMapper.selectByPhone(uphone);
    }
}
