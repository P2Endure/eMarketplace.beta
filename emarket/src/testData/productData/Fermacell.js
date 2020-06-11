export default { surface :  `
    Material,
    MW040,                   !- Name
    VeryRough,               !- Roughness
    0.05,                    !- Thickness {m}
    0.04,                    !- Conductivity {W/m-K}
    20,                      !- Density {kg/m3}
    900,                     !- Specific Heat {J/kg-K}
    0.9,                     !- Thermal Absorptance
    0.75,                    !- Solar Absorptance
    0.75;                    !- Visible Absorptance

    Material,
    FM Gypsum,               !- Name
    VeryRough,               !- Roughness
    0.0125,                  !- Thickness {m}
    0.32,                    !- Conductivity {W/m-K}
    1150,                    !- Density {kg/m3}
    1000,                    !- Specific Heat {J/kg-K}
    0.9,                     !- Thermal Absorptance
    0.75,                    !- Solar Absorptance
    0.75;                    !- Visible Absorptance

    Material,
    Steam Break,             !- Name
    VeryRough,               !- Roughness
    0.0002,                  !- Thickness {m}
    0.2,                     !- Conductivity {W/m-K}
    1100,                    !- Density {kg/m3}
    900,                     !- Specific Heat {J/kg-K}
    0.9,                     !- Thermal Absorptance
    0.75,                    !- Solar Absorptance
    0.75;                    !- Visible Absorptance

    Material,
    MW 035(80%)/Kiefer(20%), !- Name
    VeryRough,               !- Roughness
    0.2,                     !- Thickness {m}
    0.054,                   !- Conductivity {W/m-K}
    130,                     !- Density {kg/m3}
    900,                     !- Specific Heat {J/kg-K}
    0.9,                     !- Thermal Absorptance
    0.75,                    !- Solar Absorptance
    0.75;                    !- Visible Absorptance

    Material,
    FM Powerpanel,           !- Name
    VeryRough,               !- Roughness
    0.015,                   !- Thickness {m}
    0.3,                     !- Conductivity {W/m-K}
    950,                     !- Density {kg/m3}
    1000,                    !- Specific Heat {J/kg-K}
    0.9,                     !- Thermal Absorptance
    0.75,                    !- Solar Absorptance
    0.75;                    !- Visible Absorptance

    Material,
    LM 21,                   !- Name
    VeryRough,               !- Roughness
    0.01,                    !- Thickness {m}
    0.21,                    !- Conductivity {W/m-K}
    700,                     !- Density {kg/m3}
    900,                     !- Specific Heat {J/kg-K}
    0.9,                     !- Thermal Absorptance
    0.75,                    !- Solar Absorptance
    0.75;                    !- Visible Absorptance`
,
 wallConstruction : `
    ! Name
    ! Outside Layer
    Construction,
    C09_Basic_Wall_Foam_concrete,  !- Name
    LM 21,                   !- Outside Layer
    FM Powerpanel,           !- Layer 2
    MW 035(80%)/Kiefer(20%), !- Layer 3
    Steam Break,             !- Layer 4
    FM Gypsum,               !- Layer 5
    MW040,                   !- Layer 6
    M10_Hormigon_celular_curado (240mm 0.6);  !- Layer 7
`
,
}