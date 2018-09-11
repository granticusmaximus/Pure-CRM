using System;
using AutoMapper;
using TriumphCrm.DataAccess.DTO;
using TriumphCrm.Models;

namespace TriumphCrm.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Users, UserDTO>();
            CreateMap<UserDTO, Users>();
        }
    }
}
