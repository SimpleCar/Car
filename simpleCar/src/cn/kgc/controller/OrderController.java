package cn.kgc.controller;

import cn.kgc.entity.Car;
import cn.kgc.entity.Order;
import cn.kgc.service.CarService;
import cn.kgc.service.OrderService;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("orderController")
public class OrderController {
    @Resource
    private OrderService orderService;
    @Resource
    private CarService carService;

    @RequestMapping("goSingle")
    public String goSingle() {
        return "single";
    }

    @RequestMapping("goCredit")
    public String goCredit() {
        return "credit";
    }

    @RequestMapping("goTrueName")
    public String goTruename() {
        return "trueName";
    }

    @RequestMapping("goChange")
    public String goChange() {
        return "changePassword";
    }

    @InitBinder
    public void bindingPreparation(WebDataBinder binder) {

        DateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy");
        CustomDateEditor orderDateEditor = new CustomDateEditor(dateFormat, true);
        binder.registerCustomEditor(Date.class, orderDateEditor);
    }

    @RequestMapping("createOrder")
    public void createOrder(HttpServletRequest request, Order order, HttpServletResponse response, Car car,Model model) throws IOException {
        //拿到车名
        String cname = request.getParameter("carname");
        //拿到首付
        double downPayment = Double.parseDouble(request.getParameter("downPayment"));
        //拿到分多少期
        double stage = Double.parseDouble(request.getParameter("stage"));
        //拿到车的ID
        int carid = Integer.parseInt(request.getParameter("carid"));
        //拿到卖家ID
        int bid = Integer.parseInt(request.getParameter("bid"));
        //拿到用户ID
        int uid = Integer.parseInt(request.getParameter("uid"));
        //创建时间
        Date date = new Date();
        String date1 = (new SimpleDateFormat("yyyyMMddHHmmss")).format(date);
        //生成随机订单号
        int random = (int) (Math.random() * 1000000000);
        //设置用户ID
        order.setUid(uid);
        //设置卖家ID
        order.setBid(bid);
        //设置时间
        order.setCreatedate(date1);
        //设置订单号
        order.setOrderNum(random);
        //设置车的ID
        order.setCid(carid);
        //设置car表车的ID
        car.setCid(carid);
        //设置car表的用户id
        car.setcUser(uid);
        List<Order> selectOrdel=orderService.selectOrder(order);
        model.addAttribute("ordel",selectOrdel);
        int updateUser=carService.updateUser(car);
        int createOrdel = orderService.insertOrders(order);

        response.getWriter().write("  {\"end\":" + random + ",\"discount\":" + carid + "}");


    }

    @RequestMapping("goto")
    public String gotos(Order order, Model model, HttpServletRequest request) {
        return "redirect:/goTo/order";
    }
}
