[![Build status](https://ci.appveyor.com/api/projects/status/3db3k0p53w5bl4dq?svg=true)](https://ci.appveyor.com/project/LiquidAssContainer/ra-composition)

# Composition

[GitHub Pages](https://liquidasscontainer.github.io/ra_composition).

## Card

Недолгое и простое задание.

## Decomposition

Хотя компоненты нужно было создавать буквально с одной строчкой комментария, многие компоненты написаны довольно подробно. Под конец некоторые вещи было уже лень делать, так что местами может выглядеть хаотично. Стилизация максимально простая и схематичная.

## Collapse

Работает нормально, если только не менять размеры окна, когда содержимое уже развёрнуто :) Очень помогла одна [статейка](https://medium.com/skillthrive/build-a-react-accordion-component-from-scratch-using-react-hooks-a71d3d91324b). До этого главная проблема была в том, что я использовал всякие `clientHeight` и `offsetHeight`, а не `scrollHeight` (нужен был именно он).
