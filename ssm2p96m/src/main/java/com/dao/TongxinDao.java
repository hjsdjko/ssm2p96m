package com.dao;

import com.entity.TongxinEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.TongxinVO;
import com.entity.view.TongxinView;


/**
 * 通信
 * 
 * @author 
 * @email 
 * @date 2021-04-06 18:09:59
 */
public interface TongxinDao extends BaseMapper<TongxinEntity> {
	
	List<TongxinVO> selectListVO(@Param("ew") Wrapper<TongxinEntity> wrapper);
	
	TongxinVO selectVO(@Param("ew") Wrapper<TongxinEntity> wrapper);
	
	List<TongxinView> selectListView(@Param("ew") Wrapper<TongxinEntity> wrapper);

	List<TongxinView> selectListView(Pagination page,@Param("ew") Wrapper<TongxinEntity> wrapper);
	
	TongxinView selectView(@Param("ew") Wrapper<TongxinEntity> wrapper);
	
}
