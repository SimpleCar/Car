package cn.kgc.service;

import cn.kgc.entity.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserService {
    List<User> selectAll();

    User selectUser(@Param("uphone")String uname, @Param("upwd")String upwd);

}
