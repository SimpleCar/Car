package cn.kgc.dao;

import cn.kgc.entity.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserMapper {
    List<User> selectAll();

    //手机快捷登录
    User selectByPhone(String uphone);

    //账号密码登录
    User selectUser(@Param("uphone")String uname,@Param("upwd")String upwd);

    //注册
    int insertUser(@Param("uphone")String uphone,@Param("upwd")String upwd);

}
