<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 0011 2018年03月11日
  Time: 下午 18:11:17
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>我是商家</title>
</head>
<body>
<jsp:include page="top.jsp"/>
<h3>商家信息展示</h3>
<c:forEach items="${carInfoList}" var="CarInfo" varStatus="cishu">
    <h1>${CarInfo}+${cishu.count}</h1>
</c:forEach>
</body>
</html>
