package com.entity.view;

import com.entity.TongxinEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 通信
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2021-04-06 18:09:59
 */
@TableName("tongxin")
public class TongxinView  extends TongxinEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public TongxinView(){
	}
 
 	public TongxinView(TongxinEntity tongxinEntity){
 	try {
			BeanUtils.copyProperties(this, tongxinEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
