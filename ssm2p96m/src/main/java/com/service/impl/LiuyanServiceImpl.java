package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.LiuyanDao;
import com.entity.LiuyanEntity;
import com.service.LiuyanService;
import com.entity.vo.LiuyanVO;
import com.entity.view.LiuyanView;

@Service("liuyanService")
public class LiuyanServiceImpl extends ServiceImpl<LiuyanDao, LiuyanEntity> implements LiuyanService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<LiuyanEntity> page = this.selectPage(
                new Query<LiuyanEntity>(params).getPage(),
                new EntityWrapper<LiuyanEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<LiuyanEntity> wrapper) {
		  Page<LiuyanView> page =new Query<LiuyanView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<LiuyanVO> selectListVO(Wrapper<LiuyanEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public LiuyanVO selectVO(Wrapper<LiuyanEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<LiuyanView> selectListView(Wrapper<LiuyanEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public LiuyanView selectView(Wrapper<LiuyanEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

}
