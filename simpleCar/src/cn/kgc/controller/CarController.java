package cn.kgc.controller;

import cn.kgc.entity.Car;
import cn.kgc.service.CarService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("carController")
public class CarController {
    @Resource
    private CarService carService;
    Car car = new Car();

    //去新车页面
    @RequestMapping("newCar")
    public String NewCar() {
        return "newCar";
    }

    //去20-30页面跑车
    @RequestMapping("SuperCar20")
    public String SuperCar20(Model model){
        car.setCmax(30);
        car.setCmin(20);
        List<Car> list=carService.selectCar(car);

        model.addAttribute("list",list);
        return "SuperCar20";

    }
    @RequestMapping("goSelectALL2030")
    public String goSelectALL2030(){
        return "selectAll2030";
    }
   /* @RequestMapping("superCar20")
    public String superCar20(Model model) {
        List<Car> list = carService.selectAll();

        model.addAttribute("list", list);
        return "SuperCar20";

        //去30-45页面跑车
        //去45以上跑车
        //去45以上豪车


    }*/
}
