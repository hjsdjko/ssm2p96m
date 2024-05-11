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


import com.dao.KuaididingdanDao;
import com.entity.KuaididingdanEntity;
import com.service.KuaididingdanService;
import com.entity.vo.KuaididingdanVO;
import com.entity.view.KuaididingdanView;

@Service("kuaididingdanService")
public class KuaididingdanServiceImpl extends ServiceImpl<KuaididingdanDao, KuaididingdanEntity> implements KuaididingdanService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<KuaididingdanEntity> page = this.selectPage(
                new Query<KuaididingdanEntity>(params).getPage(),
                new EntityWrapper<KuaididingdanEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<KuaididingdanEntity> wrapper) {
		  Page<KuaididingdanView> page =new Query<KuaididingdanView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<KuaididingdanVO> selectListVO(Wrapper<KuaididingdanEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public KuaididingdanVO selectVO(Wrapper<KuaididingdanEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<KuaididingdanView> selectListView(Wrapper<KuaididingdanEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public KuaididingdanView selectView(Wrapper<KuaididingdanEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

}
